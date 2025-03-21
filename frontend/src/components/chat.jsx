import React, { useState, useEffect } from 'react';
import { MessageSquare, User, Send, Menu } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import Logo from "../logo2.png"

const AIChatter = () => {
   const [messages, setMessages] = useState([
      {
         id: 1,
         role: 'assistant',
         content: 'Hello! How can I help you with?'
      },
   ]);
   const [newMessage, setNewMessage] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [conversationStarted, setConversationStarted] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const api = axios.create({
      baseURL: "https://counsilx.onrender.com",
      headers: { 'Content-Type': 'application/json' }
   });

   const handleSendMessage = async () => {
      if (newMessage.trim()) {
         const userMessage = {
            id: messages.length + 1,
            role: 'user',
            content: newMessage
         };

         const updatedMessages = [...messages, userMessage];
         setMessages(updatedMessages);
         setNewMessage('');
         setIsLoading(true);
         setConversationStarted(true);

         try {
            const response = await api.post("/chat", {
               message: newMessage,
            });

            setMessages([...updatedMessages, {
               id: updatedMessages.length + 1,
               role: 'assistant',
               content: response.data.reply
            }]);
         } catch (err) {
            console.error("Error getting response:", err);
            setMessages([...updatedMessages, {
               id: updatedMessages.length + 1,
               role: 'assistant',
               content: 'Sorry, I encountered an error. Please try again.'
            }]);
         } finally {
            setIsLoading(false);
         }
      }
   };

   const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSendMessage();
      }
   };

   useEffect(() => {
      if (messages.length > 1) {
         setConversationStarted(true);
      }
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) { chatContainer.scrollTop = chatContainer.scrollHeight; }
   }, [messages]);


   return (
      <div className="flex flex-col height bg-gray-900 text-white">
         <header className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
               <div className="text-white text-xl font-bold flex float-left">
               <img src={Logo} alt="CounselX logo" className="h-8 w-8 mr-2 text-white" /> Counsel<span className="text-cyan-400">X</span>
               </div>
               <div className="flex float-right space-x-3">
                  <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                     <User size={16} />
                  </button>
                  <button
                     className="md:hidden w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white"
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                     <Menu size={16} />
                  </button>
               </div>
            </div>
         </header>

         <div className="flex-1 flex flex-col overflow-hidden">
            {!conversationStarted && (
               <div className="text-center py-6 px-4 bg-gray-900 ">
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">Chat with <span className="text-cyan-400">Legal Advisor</span></h1>
                  <p className="text-gray-300 mb-4">Ask Anything You Want</p>
               </div>
            )}

            <div className={`flex-1 flex flex-col p-4 overflow-hidden bg-gray-900 ${conversationStarted ? 'pt-0' : ''}`}>
               <div id="chat-messages" className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2" >
                  {messages.map((message) => (
                     <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs sm:max-w-md md:max-w-lg rounded-lg p-3 ${message.role === 'user'
                           ? 'bg-gray-700 text-white ml-12'
                           : 'bg-gray-700 text-white mr-12'
                           }`}>
                           {message.role === 'assistant' && (
                              <div className="bg-cyan-600 w-6 h-6 rounded-md flex items-center justify-center mb-2">
                                 <MessageSquare size={14} className="text-gray-900" />
                              </div>
                           )}
                           <div className="text-sm markdown-content">
                              <ReactMarkdown>
                                 {message.content}
                              </ReactMarkdown>
                           </div>
                        </div>
                     </div>
                  ))}

                  {isLoading && (
                     <div className="flex justify-start">
                        <div className="max-w-xs sm:max-w-md md:max-w-lg rounded-lg p-3 bg-gray-700 text-white mr-12">
                           <div className="bg-cyan-400 w-6 h-6 rounded-md flex items-center justify-center mb-2">
                              <MessageSquare size={14} className="text-gray-900" />
                           </div>
                           <div className="flex items-center">
                              <p className="text-sm">Thinking<span className="loading-dots"></span></p>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

               <div className="relative">
                  <input
                     type="text"
                     placeholder="Message CounselX"
                     className="w-full bg-gray-800 text-white rounded-md border border-gray-600 py-3 pl-4 pr-12"
                     value={newMessage}
                     onChange={(e) => setNewMessage(e.target.value)}
                     onKeyPress={handleKeyPress}
                     disabled={isLoading}
                  />
                  <button
                     className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isLoading ? 'bg-gray-500' : 'bg-cyan-400'} w-8 h-8 rounded-md flex items-center justify-center`}
                     onClick={handleSendMessage}
                     disabled={isLoading || !newMessage.trim()}
                  >
                     <Send size={16} className="text-gray-900" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AIChatter;

import React, { useState } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const IntegratedChatSystem: React.FC = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  
  // Botpress configuration
  const clientId = "096cf593-52f6-4f4d-8ed5-39799374e42e";
  const configuration: Configuration = {
    color: '#7c3aed', // Purple color to match your theme
    // You can add more configuration options here
    // botName: "TableLK Support Agent",
    // botAvatar: "https://files.bpcontent.cloud/2025/07/15/05/20250715051212-IXILKPY9.png",
  };

  const client = getClient({
    clientId,
  });
  
  // Replace with your actual WhatsApp Business number (with country code, no + sign)
  const whatsappNumber = "94768919013"; // Sri Lankan number from footer
  
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
    setIsMenuExpanded(false);
  };
  
  const handleWhatsAppClick = (messageType: string) => {
    let message = "";
    
    switch (messageType) {
      case "product_inquiry":
        message = "Hi! I'm interested in your furniture products. Can you please share more details?";
        break;
      case "custom_order":
        message = "Hello! I would like to place a custom furniture order. Can we discuss the details?";
        break;
      case "general":
        message = "Hi! I have a question about TableLK furniture.";
        break;
      default:
        message = "Hello from TableLK website!";
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsMenuExpanded(false);
  };

  return (
    <>
      {/* Botpress Webchat Provider */}
      <WebchatProvider client={client} configuration={configuration}>
        {/* Botpress Webchat positioned at bottom-left */}
        <div 
          className="fixed bottom-6 left-6 z-40"
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>

      {/* Main Chat Menu positioned at bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isMenuExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 bg-white rounded-lg shadow-lg border p-4 w-72"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Contact Options</h3>
                <button
                  onClick={() => setIsMenuExpanded(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={toggleWebchat}
                  className="w-full text-left p-3 rounded-md bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-200"
                >
                  <div className="font-medium text-purple-800 flex items-center">
                    <Bot size={16} className="mr-2" />
                    AI Chat Assistant
                  </div>
                  <div className="text-sm text-purple-600">Get instant help from our AI</div>
                </button>
                
                <button
                  onClick={() => handleWhatsAppClick("product_inquiry")}
                  className="w-full text-left p-3 rounded-md bg-green-50 hover:bg-green-100 transition-colors border border-green-200"
                >
                  <div className="font-medium text-green-800">Product Inquiry</div>
                  <div className="text-sm text-green-600">Ask about our furniture</div>
                </button>
                
                <button
                  onClick={() => handleWhatsAppClick("custom_order")}
                  className="w-full text-left p-3 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  <div className="font-medium text-blue-800">Custom Order</div>
                  <div className="text-sm text-blue-600">Place a custom order</div>
                </button>
                
                <button
                  onClick={() => handleWhatsAppClick("general")}
                  className="w-full text-left p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <div className="font-medium text-gray-800">General Question</div>
                  <div className="text-sm text-gray-600">Other inquiries</div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors"
          aria-label="Contact Options"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>
    </>
  );
};

export default IntegratedChatSystem;
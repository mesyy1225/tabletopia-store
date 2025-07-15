import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppBubble: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBotpressLoaded, setIsBotpressLoaded] = useState(false);
  
  // Replace with your actual WhatsApp Business number (with country code, no + sign)
  const whatsappNumber = "94768919013"; // Sri Lankan number from footer
  
  useEffect(() => {
    // Check if Botpress is loaded
    const checkBotpress = () => {
      if (typeof window !== 'undefined' && (window as any).botpressWebChat) {
        setIsBotpressLoaded(true);
      } else {
        setTimeout(checkBotpress, 500);
      }
    };
    
    checkBotpress();
  }, []);
  
  const toggleBotpress = () => {
    if (!isBotpressLoaded) {
      console.log("Botpress not loaded yet");
      return;
    }

    try {
      if (typeof window !== 'undefined' && (window as any).botpressWebChat) {
        const webchat = (window as any).botpressWebChat;
        
        // Toggle the webchat
        if (webchat.isOpen) {
          webchat.close();
        } else {
          webchat.open();
        }
      }
    } catch (error) {
      console.error("Error toggling Botpress:", error);
    }
    
    setIsExpanded(false);
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
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-lg shadow-lg border p-4 w-72"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Contact Options</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={toggleBotpress}
                className={`w-full text-left p-3 rounded-md transition-colors border ${
                  isBotpressLoaded 
                    ? 'bg-purple-50 hover:bg-purple-100 border-purple-200' 
                    : 'bg-gray-50 border-gray-200 cursor-not-allowed'
                }`}
                disabled={!isBotpressLoaded}
              >
                <div className={`font-medium flex items-center ${
                  isBotpressLoaded ? 'text-purple-800' : 'text-gray-500'
                }`}>
                  <Bot size={16} className="mr-2" />
                  AI Chat Assistant
                </div>
                <div className={`text-sm ${
                  isBotpressLoaded ? 'text-purple-600' : 'text-gray-400'
                }`}>
                  {isBotpressLoaded ? 'Get instant help from our AI' : 'Loading...'}
                </div>
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
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors"
        aria-label="Contact Options"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default WhatsAppBubble;
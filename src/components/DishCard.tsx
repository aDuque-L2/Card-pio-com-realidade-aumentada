"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/data/menu";
import ModelViewer from "./ModelViewer";
import { X, Info } from "lucide-react";

export default function DishCard({ dish }: { dish: MenuItem }) {
  const [selectedPortionId, setSelectedPortionId] = useState(dish.portions[0].id);
  const [isViewingAR, setIsViewingAR] = useState(false);

  const selectedPortion = dish.portions.find(p => p.id === selectedPortionId)!;

  return (
    <>
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-surface rounded-3xl overflow-hidden shadow-xl border border-white/5 cursor-pointer"
        onClick={() => setIsViewingAR(true)}
      >
        <div className="h-48 w-full overflow-hidden relative">
          <img 
            src={dish.image} 
            alt={dish.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <h3 className="text-xl font-bold text-white">{dish.name}</h3>
            <span className="text-primary font-bold">R$ {dish.portions[0].price.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isViewingAR && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          >
            <div className="bg-surface w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[85vh]">
              {/* Header */}
              <div className="p-4 flex justify-between items-center border-b border-white/5">
                <h3 className="font-bold text-lg">{dish.name}</h3>
                <button 
                  onClick={() => setIsViewingAR(false)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* 3D Viewer Area */}
              <div className="flex-1 relative p-4">
                <ModelViewer 
                  src={selectedPortion.model3DUrl} 
                  iosSrc={selectedPortion.iosModelUrl}
                  alt={dish.name} 
                />
              </div>

              {/* Controls Area */}
              <div className="p-6 bg-background rounded-t-3xl border-t border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">R$ {selectedPortion.price.toFixed(2).replace('.', ',')}</span>
                  <div className="flex items-center gap-1 text-text-muted text-sm bg-white/5 px-3 py-1 rounded-full">
                    <Info size={14} />
                    <span>Deslize em 3D ou clique em AR</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="text-sm text-text-muted mb-2 block">Escolha a porção (Gramatura):</label>
                  <div className="flex gap-2">
                    {dish.portions.map(portion => (
                      <button
                        key={portion.id}
                        onClick={() => setSelectedPortionId(portion.id)}
                        className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                          selectedPortionId === portion.id 
                            ? "bg-primary text-black shadow-[0_0_15px_rgba(234,179,8,0.3)]" 
                            : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                      >
                        {portion.weightGrams}g
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-bold rounded-2xl text-lg hover:bg-gray-100 transition-colors">
                  Adicionar ao Pedido
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

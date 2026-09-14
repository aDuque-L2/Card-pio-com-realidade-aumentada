import { menuData } from "@/data/menu";
import DishCard from "@/components/DishCard";
import { UtensilsCrossed } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 bg-gradient-to-b from-surface to-background sticky top-0 z-10 border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-black">
            <UtensilsCrossed size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">O Bistrô</h1>
            <p className="text-primary text-sm font-medium">Cardápio Interativo AR</p>
          </div>
        </div>
      </header>

      {/* Menu Categories / List */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          Destaques da Casa
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </main>
  );
}

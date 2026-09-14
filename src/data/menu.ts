export interface Portion {
  id: string;
  weightGrams: number;
  price: number;
  model3DUrl: string;
  iosModelUrl?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  portions: Portion[];
}

export const menuData: MenuItem[] = [
  {
    id: "picanha-na-chapa",
    name: "Picanha na Chapa",
    description: "Picanha premium grelhada com alho, acompanhada de farofa e vinagrete. A representação 3D mostra o prato exato.",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=600&auto=format&fit=crop",
    portions: [
      {
        id: "picanha-200g",
        weightGrams: 200,
        price: 89.90,
        model3DUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Placeholder para testes
      },
      {
        id: "picanha-400g",
        weightGrams: 400,
        price: 159.90,
        model3DUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb", // Placeholder para testes
      }
    ]
  },
  {
    id: "risoto-funghi",
    name: "Risoto de Funghi",
    description: "Risoto cremoso de cogumelos frescos com queijo parmesão ralado.",
    image: "https://images.unsplash.com/photo-1633337474564-1d9321c1f7ab?q=80&w=600&auto=format&fit=crop",
    portions: [
      {
        id: "risoto-250g",
        weightGrams: 250,
        price: 65.00,
        model3DUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", 
      },
      {
        id: "risoto-450g",
        weightGrams: 450,
        price: 95.00,
        model3DUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb", 
      }
    ]
  }
];

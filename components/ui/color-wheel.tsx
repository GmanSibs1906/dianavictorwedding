interface ColorWheelProps {
  className?: string;
}

export function ColorWheel({ className = "" }: ColorWheelProps) {
  const colors = [
    { name: "Sage Green", hex: "#9CAF88", category: "green" },
    { name: "Forest Green", hex: "#355E3B", category: "green" },
    { name: "Olive Green", hex: "#556B2F", category: "green" },
    { name: "Eucalyptus", hex: "#44806A", category: "green" },
    { name: "Pine Green", hex: "#01796F", category: "green" },
    { name: "Moss Green", hex: "#8A9A5B", category: "green" },
    { name: "Champagne", hex: "#F7E7CE", category: "tan" },
    { name: "Beige", hex: "#D2B48C", category: "tan" },
    { name: "Taupe", hex: "#B8860B", category: "tan" },
    { name: "Khaki", hex: "#C3B091", category: "tan" },
    { name: "Sand", hex: "#E6D3A3", category: "tan" },
    { name: "Camel", hex: "#C19A6B", category: "tan" }
  ];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-80 h-80 mx-auto">
        {colors.map((color, index) => {
          const angle = (index * 360) / colors.length;
          const radian = (angle * Math.PI) / 180;
          const radius = 120;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;
          
          return (
            <div
              key={color.name}
              className="absolute w-12 h-12 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: color.hex,
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              title={`${color.name} (${color.hex})`}
            >
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {color.name}
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Center circle with wedding colors text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white border-2 border-amber-200 rounded-full flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="text-amber-800 font-editorial text-sm tracking-wide">Wedding</div>
            <div className="text-amber-600 font-cormorant text-xs">Colors</div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex gap-8 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-600"></div>
          <span className="text-sm font-cormorant text-gray-700">Green Shades</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-amber-600"></div>
          <span className="text-sm font-cormorant text-gray-700">Tan Shades</span>
        </div>
      </div>
    </div>
  );
} 
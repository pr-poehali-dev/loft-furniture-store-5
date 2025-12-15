import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  images: string[];
  category: string;
}

export default function ProductCard({ name, price, images, category }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative aspect-square overflow-hidden bg-white cursor-pointer">
            <img
              src={images[currentImageIndex]}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium">
              {category}
            </div>
            {images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-primary w-4' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
              <Icon name="ZoomIn" className="text-white" size={32} />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt={name}
              className={`w-full transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <Icon name="ChevronLeft" size={24} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <Icon name="ChevronRight" size={24} />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{category}</p>
        <h3 className="font-heading font-semibold text-lg mb-3">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-heading font-bold">{price.toLocaleString('ru-RU')} ₽</p>
          <Button variant="default" size="sm">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </Card>
  );
}

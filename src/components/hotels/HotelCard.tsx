import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

interface HotelCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
}

const HotelCard = ({ 
  id, 
  image, 
  title, 
  location, 
  price, 
  rating, 
  reviewCount, 
  amenities 
}: HotelCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'parking':
        return <Car className="h-4 w-4" />;
      case 'breakfast':
        return <Coffee className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="group bg-card rounded-xl shadow-card hover:shadow-hotel transition-all duration-300 overflow-hidden border border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground font-semibold">
            <Star className="h-3 w-3 mr-1 fill-hotel-rating text-hotel-rating" />
            {rating}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${price}</div>
            <div className="text-sm text-muted-foreground">per night</div>
          </div>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
          <span className="text-sm ml-2">• {reviewCount} reviews</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {amenities.slice(0, 3).map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
          {amenities.length > 3 && (
            <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
              +{amenities.length - 3} more
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Link to={`/hotel/${id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Link to={`/booking?hotel=${id}`}>
            <Button variant="booking">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  ChevronLeft, 
  ChevronRight, 
  Heart,
  Share2,
  Phone,
  Mail
} from "lucide-react";
import hotel1 from "@/assets/hotel1.jpg";
import hotel2 from "@/assets/hotel2.jpg";
import hotel3 from "@/assets/hotel3.jpg";

const HotelDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample hotel data - in real app, this would come from API
  const hotel = {
    id: id || "1",
    title: "Grand Royal Hotel",
    location: "Tashkent City Center, Uzbekistan",
    rating: 4.5,
    reviewCount: 324,
    price: 120,
    images: [hotel1, hotel2, hotel3],
    description: "Experience luxury at its finest at the Grand Royal Hotel. Located in the heart of Tashkent, our five-star hotel offers elegantly appointed rooms with stunning city views, world-class amenities, and exceptional service. Whether you're traveling for business or leisure, enjoy our spa, rooftop pool, fine dining restaurants, and convenient location near major attractions.",
    amenities: [
      "Free WiFi",
      "Free Parking", 
      "Breakfast Included",
      "Spa & Wellness Center",
      "Outdoor Pool",
      "Fitness Center",
      "Restaurant",
      "Room Service",
      "Concierge",
      "Business Center",
      "Pet Friendly",
      "Air Conditioning"
    ],
    contact: {
      phone: "+998 71 123 4567",
      email: "info@grandroyalhotel.uz"
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === hotel.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{hotel.title}</h1>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{hotel.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={hotel.images[currentImageIndex]}
                  alt={hotel.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {hotel.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold px-3 py-1">
                <Star className="h-4 w-4 mr-1 fill-hotel-rating text-hotel-rating" />
                {hotel.rating}
              </Badge>
              <span className="text-muted-foreground">
                Based on {hotel.reviewCount} guest reviews
              </span>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">About This Hotel</h2>
              <p className="text-muted-foreground leading-relaxed">
                {hotel.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {hotel.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground bg-muted/50 px-3 py-2 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{hotel.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{hotel.contact.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-xl shadow-hotel p-6 border border-border/50">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-primary">${hotel.price}</span>
                    <span className="text-muted-foreground ml-1">per night</span>
                  </div>
                  <Badge variant="secondary" className="bg-hotel-success/10 text-hotel-success border-hotel-success/20">
                    Best Price
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Check-in</label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Check-out</label>
                      <input
                        type="date"
                        className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Guests</label>
                    <select className="w-full mt-1 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                <Link to={`/booking?hotel=${hotel.id}`}>
                  <Button variant="booking" size="lg" className="w-full">
                    Reserve Now
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-3">
                  Free cancellation until 24 hours before check-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
import HotelCard from "./HotelCard";
import hotel1 from "@/assets/hotel1.jpg";
import hotel2 from "@/assets/hotel2.jpg";
import hotel3 from "@/assets/hotel3.jpg";

const sampleHotels = [
  {
    id: "1",
    image: hotel1,
    title: "Grand Royal Hotel",
    location: "Tashkent City Center",
    price: 120,
    rating: 4.5,
    reviewCount: 324,
    amenities: ["WiFi", "Parking", "Breakfast", "Spa", "Pool"]
  },
  {
    id: "2",
    image: hotel2,
    title: "Boutique Palace",
    location: "Samarkand Historic District",
    price: 95,
    rating: 4.7,
    reviewCount: 156,
    amenities: ["WiFi", "Breakfast", "Restaurant", "Gym"]
  },
  {
    id: "3",
    image: hotel3,
    title: "Mountain View Resort",
    location: "Chimgan Mountains",
    price: 180,
    rating: 4.8,
    reviewCount: 89,
    amenities: ["WiFi", "Parking", "Breakfast", "Spa", "Pool", "Hiking"]
  },
  {
    id: "4",
    image: hotel1,
    title: "Business Executive Hotel",
    location: "Tashkent Business District",
    price: 140,
    rating: 4.4,
    reviewCount: 267,
    amenities: ["WiFi", "Parking", "Breakfast", "Business Center"]
  },
  {
    id: "5",
    image: hotel2,
    title: "Heritage Boutique",
    location: "Bukhara Old Town",
    price: 110,
    rating: 4.6,
    reviewCount: 198,
    amenities: ["WiFi", "Restaurant", "Cultural Tours", "Garden"]
  },
  {
    id: "6",
    image: hotel3,
    title: "Luxury Desert Resort",
    location: "Kyzylkum Desert",
    price: 220,
    rating: 4.9,
    reviewCount: 45,
    amenities: ["WiFi", "Parking", "All-Inclusive", "Desert Safari", "Spa"]
  }
];

interface HotelCardListProps {
  searchResults?: boolean;
}

const HotelCardList = ({ searchResults = false }: HotelCardListProps) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">
            {searchResults ? "Search Results" : "Featured Hotels"}
          </h2>
          <p className="text-muted-foreground mt-1">
            {searchResults 
              ? `Found ${sampleHotels.length} hotels matching your search`
              : "Discover our handpicked selection of premium hotels"
            }
          </p>
        </div>
        {!searchResults && (
          <div className="text-sm text-primary font-medium cursor-pointer hover:underline">
            View all hotels →
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleHotels.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelCardList;
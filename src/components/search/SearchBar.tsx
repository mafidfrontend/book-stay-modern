import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    console.log("Searching with:", searchData);
    // Handle search logic here
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-card rounded-2xl shadow-floating p-6 border border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Destination
            </label>
            <Input
              placeholder="Where to?"
              value={searchData.destination}
              onChange={(e) => handleInputChange("destination", e.target.value)}
              className="border-border/50 focus:border-primary"
            />
          </div>

          {/* Check-in */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check-in
            </label>
            <Input
              type="date"
              value={searchData.checkIn}
              onChange={(e) => handleInputChange("checkIn", e.target.value)}
              className="border-border/50 focus:border-primary"
            />
          </div>

          {/* Check-out */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Check-out
            </label>
            <Input
              type="date"
              value={searchData.checkOut}
              onChange={(e) => handleInputChange("checkOut", e.target.value)}
              className="border-border/50 focus:border-primary"
            />
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="h-4 w-4" />
              Guests
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              value={searchData.guests}
              onChange={(e) => handleInputChange("guests", e.target.value)}
              className="border-border/50 focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button 
            variant="search" 
            size="lg" 
            onClick={handleSearch}
            className="w-full md:w-auto min-w-[200px]"
          >
            <Search className="h-5 w-5 mr-2" />
            Search Hotels
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
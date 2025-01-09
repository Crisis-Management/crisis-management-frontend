import React from 'react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { MapPin } from 'lucide-react';

interface Location {
  latitude: number;
  longitude: number;
}

interface LocationInputProps {
  initialLocation?: Location;
  onLocationChange: (location: Location) => void;
}

export const LocationInput = ({ initialLocation, onLocationChange }: LocationInputProps) => {
  const [location, setLocation] = React.useState<Location>(
    initialLocation || { latitude: 0, longitude: 0 }
  );

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          setLocation(newLocation);
          onLocationChange(newLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Location</label>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          placeholder="Latitude"
          value={location.latitude}
          onChange={(e) => {
            const newLocation = { ...location, latitude: parseFloat(e.target.value) };
            setLocation(newLocation);
            onLocationChange(newLocation);
          }}
        />
        <Input
          type="number"
          placeholder="Longitude"
          value={location.longitude}
          onChange={(e) => {
            const newLocation = { ...location, longitude: parseFloat(e.target.value) };
            setLocation(newLocation);
            onLocationChange(newLocation);
          }}
        />
      </div>
      <Button
        type="button"
        variant="secondary"
        onClick={getCurrentLocation}
        className="w-full"
      >
        <MapPin className="h-4 w-4 mr-2" />
        Use Current Location
      </Button>
    </div>
  );
};
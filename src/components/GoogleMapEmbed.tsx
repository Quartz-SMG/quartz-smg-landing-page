import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GoogleMapEmbedProps {
  apiKey: string;
  query: string;
}

const GoogleMapEmbed = ({ apiKey, query }: GoogleMapEmbedProps) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(query)}`;
  return (
    <AspectRatio ratio={16 / 9} className="rounded-2xl overflow-hidden shadow-glass">
      <iframe
        title="Google Map - Quartz SMG Location"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </AspectRatio>
  );
};

export default GoogleMapEmbed;

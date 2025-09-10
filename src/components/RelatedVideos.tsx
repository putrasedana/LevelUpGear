import React from "react";
import { Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { chunkArray } from "../lib/utils";

interface RelatedVideosProps {
  review: {
    related_videos?: string[];
  };
}

const RelatedVideos: React.FC<RelatedVideosProps> = ({ review }) => {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl">
      <CardHeader className="flex flex-row items-center space-y-0 pb-4">
        <div className="p-2 bg-red-600/20 rounded-full mr-3">
          <Play className="h-6 w-6 text-red-400" />
        </div>
        <CardTitle className="text-xl font-bold text-white">
          Related Videos
        </CardTitle>
      </CardHeader>
      <CardContent>
        {review.related_videos && review.related_videos.length > 0 ? (
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {chunkArray(review.related_videos, 4).map(
                  (videoGroup, groupIndex) => (
                    <CarouselItem key={groupIndex}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {videoGroup.map((videoId, videoIndex) => (
                          <div
                            key={videoIndex}
                            className="aspect-video rounded-lg overflow-hidden"
                          >
                            <iframe
                              src={`https://www.youtube.com/embed/${videoId}`}
                              title={`Related Video ${
                                groupIndex * 4 + videoIndex + 1
                              }`}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              {chunkArray(review.related_videos, 4).length > 1 && (
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              )}
            </Carousel>
          </div>
        ) : (
          <p className="text-gray-400 text-center py-8">
            No related videos available.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default RelatedVideos;

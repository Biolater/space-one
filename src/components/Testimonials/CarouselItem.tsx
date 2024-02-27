type CarouselItemProps = {
    imgUrl: string,
    imgTitle: string
}

export default function CarouselItem({ imgUrl, imgTitle }: CarouselItemProps) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}
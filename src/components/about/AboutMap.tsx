export default function AboutMap() {
  return (
    <section id="map" className="h-screen scroll-mt-24">
      <h2 className="text-xl font-bold mb-4">오시는 길</h2>
      <p>서울특별시 강남구 테헤란로 123, 9층</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </section>
  );
}

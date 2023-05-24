function IndexPage() {
  return (
    <div>
      {Array(150)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            iste? Totam molestias exercitationem corrupti non? Quidem tempora ab
            magni, sequi explicabo nihil facilis non sed. Libero dignissimos
            saepe commodi natus?
          </div>
        ))}
    </div>
  );
}

export default IndexPage;

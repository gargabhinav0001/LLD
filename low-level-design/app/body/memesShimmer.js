function MemesShimmer() {
  return [...Array(20)].map((_, idx) => (
    <div key={idx} className="bg-gray-300 rounded-md animate-pulse h-32 w-32" />
  ));
}
export default MemesShimmer;

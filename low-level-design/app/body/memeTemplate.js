import Image from "next/image";

function MemeTemplate({ data }) {
  console.log("data is: ", data);
  return (
    <div className="border-2 p-2 rounded-md justify-center items-center">
      <h3>{data.title}</h3>
      <Image src={data.url} alt={data.title} width={100} height={100}></Image>
    </div>
  );
}
export default MemeTemplate;

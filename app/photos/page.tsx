const PhotosPage = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded overflow-hidden">
          <img
            src="/pepeClown.jpg"
            alt="Pepe Clown"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="border rounded overflow-hidden">
          <img
            src="https://www.cryptotimes.io/wp-content/uploads/2024/09/whale-transfer-Pepe-coin-860x484.png"
            alt="External Pepe Coin"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="border rounded overflow-hidden bg-gray-300">
          <img
            alt="Missing Image"
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
        </div>
        <div className="border rounded overflow-hidden bg-gray-300">
          <img
            alt="Missing Image"
            className="w-full h-full object-cover"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosPage;

import CreateVideoCard from "../../components/CreateVideoCard";

const CardList = [
  {
    iconName: "video",
    description: "Grave o vídeo utilizando a câmera do computador",
    btnName: "Gravar Vídeo",
  },
  {
    iconName: "upload",
    description: "Carregue um vídeo dos seus arquivos",
    btnName: "Carregar Vídeo",
  },
  {
    iconName: "screen",
    description: "Grave a tela do seu computador",
    btnName: "Gravar Tela",
  },
];

const CreateVideoCards = () => {
  return (
    <div className="flex gap-8">
      {CardList.map((item) => (
        <div className="hover:animate-[scale_0.2s_linear] hover:scale-105 cursor-pointer">
          <CreateVideoCard
            iconName={item.iconName}
            btnName={item.btnName}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CreateVideoCards;

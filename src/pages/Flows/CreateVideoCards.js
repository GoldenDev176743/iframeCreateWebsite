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
        <CreateVideoCard
          iconName={item.iconName}
          btnName={item.btnName}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CreateVideoCards;

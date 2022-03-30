const showGif = ({ src, title }) => {
  return (
    <>
      <img src={src} />
      <h5>{title}</h5>
    </>
  );
};

export default showGif;

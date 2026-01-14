import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: ["Frontend", "Backend"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;

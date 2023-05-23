export default function ColorSwitch({
    onChangeColor
  }) {

    function handleChangeColor(e){
        e.stopPropagation();
        onChangeColor();
    }

    return (
      <button onClick={handleChangeColor}>
        Change color
      </button>
    );
  }
  
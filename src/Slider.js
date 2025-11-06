


function Slider({ value, onChange, min, max, step })  {
    return (
      <input  style={{ width: '500px' }} 
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    );
  }
  
  export default Slider;
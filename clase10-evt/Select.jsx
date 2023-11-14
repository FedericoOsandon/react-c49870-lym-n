export const ItemsOptions = ({option, options, optionSelected}) => {
    return (
        <div>
             {option===1 ? 
                     <img src='https://www.corbatasstore.es/assets/SKUImages/_resampled/FitWyI1MDAiLCI1MDAiXQ/DropShadowImageWyIjMDAwIiwiMzAiLCI2IiwiNCIsIjgiXQ/PT-060-00.png' alt='foto' className="w-25" />
                     : 
                     <img src='https://static.sprintercdn.com/products/67c3afc5-f2c0-4e54-97d9-ee57b6414fc9/gorra-lisa-con-5-paneles-beechfield_67c3afc5-f2c0-4e54-97d9-ee57b6414fc9_1_2470003864.jpg' alt='foto' className="w-25" /> 
             }  
            { options.map(opt => <>
                <input
                    type="radio"
                    name="color"
                    id={opt.value}
                    checked={opt.value === option}
                    onChange={(event) => optionSelected(opt.value) }
                />
                <label for={opt.value}>{opt.text}</label>
            </>) }
         </div>
    )
}
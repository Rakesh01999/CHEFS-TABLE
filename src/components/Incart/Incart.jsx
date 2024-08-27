import PropTypes from 'prop-types';

const Incart = ({incart, handleAddToCurrents, handleRemoveFromCart}) => {
    // const {title} = incart ;
    const {recipe_name, preparing_time, calories} = incart ;
    return (
        <div className='bg-slate-200 p-4 m-4 text-[16px] flex gap-10'>
            {/* <p>{bullet}</p> */}
            <h3 className='w-[70px]'>{recipe_name}</h3>
            <p className='w-[70px]'>{preparing_time} minutes</p>
            <p className='w-[70px]'>{calories} calories</p>
            <button onClick={()=>handleAddToCurrents(incart,preparing_time,calories)} class="btn bg-[#0BE58A] rounded-full h-[38px] w-[115px]">Preparing</button>
        </div>
    );
};

Incart.PropTypes = {
    incart: PropTypes.object.isRequired,
    handleAddToCurrents: PropTypes.func ,
    handleRemoveFromCart: PropTypes.func
}

export default Incart;
import PropTypes from 'prop-types';

const Incart = ({incart}) => {
    // const {title} = incart ;
    const {recipe_name, preparing_time, calories} = incart ;
    return (
        <div className='bg-slate-200 p-4 m-4 text-[16px] flex gap-6'>
            <h3 className=''>{recipe_name}</h3>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button class="btn bg-[#0BE58A] rounded-full h-[38px] w-[115px]">Preparing</button>
        </div>
    );
};

Incart.PropTypes = {
    incart: PropTypes.object
}

export default Incart;
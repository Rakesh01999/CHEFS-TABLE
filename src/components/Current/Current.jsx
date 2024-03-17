import PropTypes from 'prop-types';

const Current = ({ current }) => {
    // const {title} = incart ;
    const { recipe_name, preparing_time, calories } = current;
    return (
        <div className='bg-slate-200 p-4 m-4 text-[16px] flex gap-8'>
            <h3 className='w-[70px]'>{recipe_name}</h3>
            <p>{preparing_time} minutes</p>
            <p>{calories} calories</p>
        </div>
    );
};

Current.PropTypes = {
    current: PropTypes.object
}

export default Current;
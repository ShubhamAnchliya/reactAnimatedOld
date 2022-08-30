// // p2.1
// import React from 'react';

// const Sresult = () => {
//     const img= "https://source.unsplash.com/user/erondu/600x400";
//     return (
//         <>
//             <div>
//                 <img src={img} alt="search" />

//             </div>
//         </>
//     );
// }

// export default Sresult;


// p2.2 here we pass image name by using props.name
import React from 'react';

const Sresult = (props) => {
    const img= `https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <div>
                <img src={img} alt="search" />

            </div>
        </>
    );
}

export default Sresult;
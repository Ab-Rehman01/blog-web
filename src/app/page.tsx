
// export default async function Home() {
//   let res: Iblog[] = await client.fetch('*[_type == "blog"]');
//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Blogs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {res.map((data, index) => {
//             return (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="p-6">
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
//                     {data.name}
//                   </h2>
//                   <p className="text-gray-600 line-clamp-3">
//                    {data.subheading}
//                   </p>
//                   <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// src/app/page.tsx
import { client } from '@/sanity/lib/client';

interface Iblog {
  name: string;
  subheading: string;
  _id: string;
  poster?: {
    asset: {
      url: string;
    };
    caption: string;
    attribution: string;
    altText: string;
    imageDescription: string;
    imageCategory: string;
    order: number;
    isFeatured: boolean;
  };
}

// Default export must be a React component
const Home = async () => {
  try {
    const blogs: Iblog[] = await client.fetch(
      '*[_type == "blog"]{_id, name, subheading, poster{asset->{url}, caption, attribution, altText, imageDescription, imageCategory, order, isFeatured}}'
    );

    return (
      <div className="bg-gray-100 min-h-screen py-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Blogify!</h1>
            <p className="text-lg md:text-xl mb-8">Discover amazing blog content here and stay updated with the latest trends.</p>
            <a href="#blog" className="inline-block bg-yellow-500 text-black text-lg font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
              Get Started
            </a>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Blogs</h1>

          {blogs.length === 0 ? (
            <div className="text-center text-xl text-gray-600">No blogs found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((data) => (
                <div key={data._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    {/* Display image if available */}
                    {data.poster?.asset?.url && (
                      <div className="mb-4">
                        <img
                          src={data.poster.asset.url}
                          alt={data.poster.altText || 'Blog Image'}
                          className="w-full h-48 object-cover mb-4"
                        />
                        {data.poster.caption && (
                          <p className="text-sm text-gray-500 italic">{data.poster.caption}</p>
                        )}
                      </div>
                    )}

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                      {data.name}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">{data.subheading}</p>

                    {/* Optional: Show image category if available */}
                    {data.poster?.imageCategory && (
                      <p className="text-sm text-gray-500 mt-2">Category: {data.poster.imageCategory}</p>
                    )}

                    {/* Show featured status if available */}
                    {data.poster?.isFeatured && (
                      <p className="text-sm text-green-500 mt-2">Featured Post</p>
                    )}

                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return (
      <div className="text-center py-20 text-red-500">
        <h2 className="text-2xl font-bold">Something went wrong while fetching the blogs.</h2>
      </div>
    );
  }
};

// Ensure you are default exporting the component
export default Home;



//<image/>
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';

// interface Iblog {
//   name: string;
//   subheading: string;
//   _id: string;
//   poster?: {
//     asset: {
//       url: string;
//     };
//     caption: string;
//     attribution: string;
//     altText: string;
//     imageDescription: string;
//     imageCategory: string;
//     order: number;
//     isFeatured: boolean;
//   };
// }

// // Default export must be a React component
// const Home = async () => {
//   try {
//     const blogs: Iblog[] = await client.fetch(
//       '*[_type == "blog"]{_id, name, subheading, poster{asset->{url}, caption, attribution, altText, imageDescription, imageCategory, order, isFeatured}}'
//     );

//     return (
//       <div className="bg-gray-100 min-h-screen py-10">
//         {/* Hero Section */}
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
//           <div className="max-w-6xl mx-auto px-4">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Blogify!</h1>
//             <p className="text-lg md:text-xl mb-8">Discover amazing blog content here and stay updated with the latest trends.</p>
//             <a href="#blog" className="inline-block bg-yellow-500 text-black text-lg font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
//               Get Started
//             </a>
//           </div>
//         </div>

//         {/* Blogs Section */}
//         <div className="max-w-6xl mx-auto px-4 mt-12">
//           <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Blogs</h1>

//           {blogs.length === 0 ? (
//             <div className="text-center text-xl text-gray-600">No blogs found</div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {blogs.map((data) => (
//                 <div key={data._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                   <div className="p-6">
//                     {/* Display image if available */}
//                     {data.poster?.asset?.url && (
//                       <div className="mb-4">
//                         <Image
//                           src={data.poster.asset.url}
//                           alt={data.poster.altText || 'Blog Image'}
//                           width={600}  // Adjust the width as needed
//                           height={300} // Adjust the height as needed
//                           className="w-full h-48 object-cover mb-4"
//                         />
//                         {data.poster.caption && (
//                           <p className="text-sm text-gray-500 italic">{data.poster.caption}</p>
//                         )}
//                       </div>
//                     )}

//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
//                       {data.name}
//                     </h2>
//                     <p className="text-gray-600 line-clamp-3">{data.subheading}</p>

//                     {/* Optional: Show image category if available */}
//                     {data.poster?.imageCategory && (
//                       <p className="text-sm text-gray-500 mt-2">Category: {data.poster.imageCategory}</p>
//                     )}

//                     {/* Show featured status if available */}
//                     {data.poster?.isFeatured && (
//                       <p className="text-sm text-green-500 mt-2">Featured Post</p>
//                     )}

//                     <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     return (
//       <div className="text-center py-20 text-red-500">
//         <h2 className="text-2xl font-bold">Something went wrong while fetching the blogs.</h2>
//       </div>
//     );
//   }
// };

// // Ensure you are default exporting the component
// export default Home;







//correct code *****************************



// import { client } from '@/sanity/lib/client';

// interface Iblog {
//   name: string;
//   subheading: string;
//   _id: string;
//   poster?: {
//     asset: {
//       url: string;
//     };
//     caption: string;
//     attribution: string;
//     altText: string;
//     imageDescription: string;
//     imageCategory: string;
//     order: number;
//     isFeatured: boolean;
//   };
// }

// export default async function Home() {
//   try {
//     const res: Iblog[] = await client.fetch(
//       '*[_type == "blog"]{_id, name, subheading, poster{asset->{url}, caption, attribution, altText, imageDescription, imageCategory, order, isFeatured}}'
//     );
    
//     console.log('Fetched Blogs:', res);

//     return (
//       <div className="bg-gray-100 min-h-screen py-10">
//         {/* Hero Section */}
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
//           <div className="max-w-6xl mx-auto px-4">
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Blogify!</h1>
//             <p className="text-lg md:text-xl mb-8">Discover amazing blog content here and stay updated with the latest trends.</p>
//             <a href="#blog"
//               className="inline-block bg-yellow-500 text-black text-lg font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition-colors">
//               Get Started
//             </a>
//           </div>
//         </div>

//         {/* Blogs Section */}
//         <div className="max-w-6xl mx-auto px-4 mt-12">
//           <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Blogs</h1>

//           {res.length === 0 ? (
//             <div className="text-center text-xl text-gray-600">No blogs found</div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {res.map((data) => (
//                 <div
//                   key={data._id}
//                   className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
//                 >
//                   <div className="p-6">
//                     {/* Display image if available */}
//                     {data.poster?.asset?.url && (
//                       <div className="mb-4">
//                         <img
//                           src={data.poster.asset.url}
//                           alt={data.poster.altText || 'Blog Image'}
//                           className="w-full h-48 object-cover mb-4"
//                         />
//                         {data.poster.caption && (
//                           <p className="text-sm text-gray-500 italic">{data.poster.caption}</p>
//                         )}
//                       </div>
//                     )}

//                     <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
//                       {data.name}
//                     </h2>
//                     <p className="text-gray-600 line-clamp-3">{data.subheading}</p>

//                     {/* Optional: Show image category if available */}
//                     {data.poster?.imageCategory && (
//                       <p className="text-sm text-gray-500 mt-2">Category: {data.poster.imageCategory}</p>
//                     )}

//                     {/* Show featured status if available */}
//                     {data.poster?.isFeatured && (
//                       <p className="text-sm text-green-500 mt-2">Featured Post</p>
//                     )}

//                     <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching blogs:', error);
//     return (
//       <div className="text-center py-20 text-red-500">
//         <h2 className="text-2xl font-bold">Something went wrong while fetching the blogs.</h2>
//       </div>
//     );
//   }
// }

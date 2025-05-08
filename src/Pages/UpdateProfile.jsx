import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateProfile = () => {

   const {updateUser, setUser} = use(AuthContext);

  const handleUpdateProfile = (e) => { 
    e.preventDefault()
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    // console.log({photo, name})
    const obj = {displayName: name, photoURL: photo}
    updateUser(obj).then(() => {
      toast.success("Profile Updated Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
      setUser(pre => ({ 
        ...pre, 
        displayName: name, 
        photoUrl: photo 
      }));
  })
  .catch(() => {
    toast.success("There is a problem with update Profile", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });})
}
                return (
                                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-100 p-6 lg:w-11/12 lg:mx-auto mx-2">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Profile</h2>

        <form onSubmit={handleUpdateProfile}> 
        <div className="mb-4">
          <label className="block font-bold text-gray-600 mb-1" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            name='photo'
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter new photo URL"
          />
        </div>

        <div className="mb-6">
          <label className="block font-bold text-gray-600 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name='name'
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter new name"
          />
        </div>
        <button
        type='submit'
          className="w-full cursor-pointer bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Update Information
        </button>
        </form>

       
      </div>
    </div>
                );
};

export default UpdateProfile;
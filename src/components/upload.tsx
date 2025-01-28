import React from "react";
// import { useState } from "react";
import { useStore } from "../store/index";
import Apifake from "../api/index";

export default function Upload() {
  const { loading, setLoading } = useStore();
  // const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = async () => {
    try {
      setLoading(true);
      await Apifake();
      alert("berhasil");
    } catch (e) {
      alert("data akses error", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <p>upload api loading di sini</p>
      <button
        disabled={loading}
        onClick={handleLoading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-red-800 cursor-pointer"
      >
        upload ya
      </button>
    </div>
  );
}

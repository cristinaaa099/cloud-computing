// js/components/InsertPage.jsx
export default function InsertPage() {
    const insertRecord = (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const data = {title, description};
        fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => {
            console.log("New record inserted");
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        });
    }
    const myFunc=(event)=>{
        window.open("https://cloud-computing-two.vercel.app") ;
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <button  style={{
                    backgroundColor: '#48A860',
                }} type="submit"
                        onClick={ myFunc}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Inapoi
                </button>

                <h1 style={{ color: '#0B6623' }} className="w-[500px] mx-auto text-center text-6xl">SuperCook App</h1>
                <p style={{ color: '#679267' }} className="w-[1000px] mx-auto text-center mt-4 text-3xl">Aceasta este o aplicatie cu retete culinare</p>

                <form>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Denumirea retetei</label>
                        <input  type="text" id="title"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@flowbite.com" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mod de preparare</label>
                        <textarea  id="description"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required/>
                    </div>
                    <button  style={{
                        backgroundColor: '#48A860',
                    }} type="submit"
                            onClick={ insertRecord }
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adauga
                    </button>
                </form>



            </div>
        </section>
    )
}
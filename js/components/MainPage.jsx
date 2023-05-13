// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try{
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const deleteRecord = (event) => {
        event.preventDefault();
        const id = event.target.id;
        try {
            fetch(`/api/records?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setRecords(records.filter(record => record._id !== id));
                });
        }
        catch (error) {
            console.log(error);
        }
    }
    const myFunc=(event)=>{
        window.open("http://localhost:3000/insert") ;
    }
    const myFunc2=(event)=>{
        window.open("http://localhost:3000/chat") ;
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <button style={{
                    backgroundColor: '#48A860',
                }} type="submit"
                        onClick={ myFunc}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adauga o reteta
                </button>
                <div style={{float: 'right'}}>
                <button style={{
                    backgroundColor: '#48A860',
                }} type="submit"
                        onClick={ myFunc2}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pune o intrebare
                </button>
                </div>
                <h1 style={{ color: '#0B6623' }} className="w-[500px] mx-auto text-center text-6xl">SuperCook App</h1>
                <p style={{ color: '#679267' }} className="w-[1000px] mx-auto text-center mt-4 text-3xl">Aceasta este o aplicatie cu retete culinare</p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {records.map(record => (
                        <div  style={{
                            backgroundColor: '#ACE1AF',
                            borderRadius:  60,
                        }}
                            key={record._id}
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {record.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {record.description}
                            </p>
                            <div className={"flex justify-center mt-4"}>
                                <button  style={{
                                    backgroundColor: '#48A860',
                                }} type="button"
                                        id={record._id}
                                        onClick={deleteRecord}
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sterge
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
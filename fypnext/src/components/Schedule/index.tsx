const ScheduleTable = () => {
    return (
        <>
            <div className="flex justify-start p-24">
                <div className="bg-white rounded-2xl w-3/4 lg:w-1/2 p-4 shadow-lg">
                    <div>
                        <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Wednesday 8</span>
                        <div className="flex mb-2">
                            <div className="w-2/12">
                                <span className="text-sm text-gray-600 block">8:00a</span>
                                <span className="text-sm text-gray-600 block">8:15a</span>
                            </div>
                            <div className="w-1/12">
                                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                            </div>
                            <div className="w-9/12">
                                <span className="text-sm font-semibold block">Morning Standup</span>
                                <span className="text-sm">Zoom ID: 1134 11 1134</span>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-2/12">
                                <span className="text-sm text-gray-600 block">10:00a</span>
                                <span className="text-sm text-gray-600 block">2:00p</span>
                            </div>
                            <div className="w-1/12">
                                <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                            </div>
                            <div className="w-9/12">
                                <span className="text-sm font-semibold block">Core Development</span>
                                <span className="text-sm">Joey, Matt, CJ and Vlad</span>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-2/12">
                                <span className="text-sm text-gray-600 block">3:00p</span>
                                <span className="text-sm text-gray-600 block">3:30p</span>
                            </div>
                            <div className="w-1/12">
                                <span className="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
                            </div>
                            <div className="w-9/12">
                                <span className="text-sm font-semibold block">Interview with Ed Harris</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Thursday 9</span>
                        <div className="flex mb-2">
                            <div className="w-2/12">
                                <span className="text-sm text-gray-600 block">8:00a</span>
                                <span className="text-sm text-gray-600 block">8:15a</span>
                            </div>
                            <div className="w-1/12">
                                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                            </div>
                            <div className="w-9/12">
                                <span className="text-sm font-semibold block">Morning Standup</span>
                                <span className="text-sm">Zoom ID: 1134 11 1134</span>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-2/12">
                                <span className="text-sm text-gray-600 block">6:00p</span>
                                <span className="text-sm text-gray-600 block">7:30p</span>
                            </div>
                            <div className="w-1/12">
                                <span className="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
                            </div>
                            <div className="w-9/12">
                                <span className="text-sm font-semibold block">Dinner with Mom</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default ScheduleTable;
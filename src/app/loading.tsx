import SkeletonLoading from "@/components/SkeletonLoading";

export default function Loading(){
    const looping =[1,2,3,4,5,6,7,8,9,10];
    return(
        <main className="p-5 sm:p-5 md:p-10 lg:p-20">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {looping.map((ele)=>(
                <SkeletonLoading key={ele}/>
              ))}
            </div>
        </main>
    )
}
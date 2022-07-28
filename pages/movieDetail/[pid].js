import {useRouter} from 'next/router';
export default function movieDetail(){
    const router = useRouter();
    const {pid} = router.query;
  
    return(
        <div>
            <h3>Detail : {pid}</h3>
        </div>
    )
}
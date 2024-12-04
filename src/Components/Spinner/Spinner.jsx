import { HashLoader } from "react-spinners"

function Spinner() {
  return (
    <>
        <section className="fixed h-full w-full top-0 bottom-0 left-0 right-0 bg-black/65 z-50">
            <section className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50">
                <HashLoader size="100" className="" color='#ba68c8' />
            </section>
        </section>
    </>
  )
}

export default Spinner
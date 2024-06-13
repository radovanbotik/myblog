import { Space_Grotesk, Archivo } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function SubscribeToNewsletter() {
  return (
    <div className="mx-auto max-w-xs">
      <div
        className={`${space_grotesk.className} flex w-full flex-col border-t border-teal-400 px-3 pt-4 text-sm font-light tracking-tight text-teal-400 md:text-base`}
      >
        <div className="mb-2.5">
          <h2 className="inline font-medium">Subsribe to</h2>
          <p className="inline">
            {" "}
            / Our weekly newsletter about the best and interesting stuff you
            should know about.
          </p>
        </div>
        <div>
          <form action="">
            <fieldset>
              <div className="mb-1 flex">
                <label htmlFor="email" className="sr-only">
                  Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mr-2 w-full rounded-sm border border-teal-400 bg-neutral-900 px-2.5 text-base font-light placeholder:text-teal-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="border-teal whitespace-nowrap rounded-sm border border-teal-400 px-4 py-3 font-medium uppercase no-underline hover:bg-teal-400 hover:text-neutral-900"
                >
                  sign up
                </button>
              </div>
            </fieldset>
            <div className={`${archivo.className} mt-0.5 text-xs`}>
              By submitting your email, you agree to our Terms and Privacy
              Notice. This site is protected by reCAPTCHA and the Google Privacy
              Policy and Terms of Service apply.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

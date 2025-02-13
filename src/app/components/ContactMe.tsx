import { Button, Input, Textarea } from "@nextui-org/react";

export function ContactMe() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>Contact Me</h1>
            <p>Feel free to reach out!</p>
            <form action="" className="flex flex-col gap-4 w-full max-w-md">
                <Input placeholder="Name" type="text" id="name" name="name" />
                <Input placeholder="Email" type="email" id="email" name="email" />
                <Textarea placeholder="Message" id="message" name="message" rows={4} />
                <Button className="bg-gray-100 text-gray-900 rounded-full px-6 py-2" type="submit">Send Message</Button>
            </form>
        </div>
    )
}
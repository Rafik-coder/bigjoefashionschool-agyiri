"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@/shared/schema";
// import { useMutation } from "@tanstack/react-query";
// import { apiRequest } from "@/lib/queryClient";
// import { insertContactMessageSchema } from "@shared/schema";

const formSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // const mutation = useMutation({
  //   mutationFn: (data: FormValues) => {
  //     return apiRequest("POST", "/api/contact", data);
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: "Message sent",
  //       description: "We've received your message and will get back to you soon.",
  //     });
  //     form.reset();
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Error",
  //       description: "There was a problem sending your message. Please try again.",
  //       variant: "destructive",
  //     });
  //   },
  // });

  function onSubmit(data: FormValues) {
    // mutation.mutate(data);
    console.log("Subitting: ", data);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="font-heading text-2xl font-semibold text-secondary mb-6">
        Send Us a Message
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Message subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full px-6 py-3 bg-blue-300 text-white font-accent font-medium rounded-lg hover:bg-primary/90 transition"
            // disabled={mutation.isPending}
          >
            {/* {mutation.isPending ? "Sending..." : "Send Message"} */}
            {"Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;

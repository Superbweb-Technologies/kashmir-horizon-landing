
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  details: z.string().min(10, { message: "Please provide more details about your booking." }),
});

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real application, you would send this data to your backend or an API
      console.log("Form submitted:", values);
      
      // For demonstration, we'll simulate a successful submission
      setTimeout(() => {
        toast({
          title: "Booking Request Sent",
          description: "Thank you for your inquiry. We will contact you shortly.",
        });
        form.reset();
        onOpenChange(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-black/90 border-white/10 text-white glass-morph">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">Book Your Stay at Horizon Kashmir</DialogTitle>
          <DialogDescription className="text-white/70">
            Fill out the form below and our team will get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40" 
                    />
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
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your email address" 
                      type="email" 
                      {...field} 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your contact number" 
                      {...field} 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Booking Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please share your expected dates, number of guests, and any special requirements" 
                      {...field}
                      className="min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="pt-4">
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Submit Booking Request"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;

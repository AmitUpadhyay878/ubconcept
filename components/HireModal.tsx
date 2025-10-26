'use client'
import { useForm } from "react-hook-form";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Lightbulb, Send } from "lucide-react";
import { useState } from "react";


type HireUsModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormValues = {
  fname: string;
  lname: string;
  email: string;
  company: string;
  companyWebsite: string;
  details: string;
};



export default function HireUsModal({ open, onOpenChange }: HireUsModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
      defaultValues: {
        fname: "",
        lname: "",
        email: "",
        company:"",
        companyWebsite:"",
        details:""
      },
    })

  const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit =async (data: FormValues) => {
       setIsSubmitting(true);
     try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: `Thank you for your message! We will get back to you soon.`,
        });
        reset();
         setIsSubmitting(false);
        
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description:
            errorData.message ||
            "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      onOpenChange(false); // Close the modal after submission attempt
      reset()
    }
  };

  return (
    
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-6 md:p-8 bg-black backdrop-blur-sm rounded-xl border border-white/30">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Hire{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                Us
              </span>
            </h2>
            <p className="text-gray-300">
              We help brands and platforms turn big ideas into beautiful digital products and experiences.
            </p>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">What can I expect?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-700/20 p-1 rounded">
                    <span className="text-amber-400">✓</span>
                  </div>
                  <span>Industry-leading design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-700/20 p-1 rounded">
                    <span className="text-amber-400">✓</span>
                  </div>
                  <span>Developer community support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-700/20 p-1 rounded">
                    <span className="text-amber-400">✓</span>
                  </div>
                  <span>Simple and affordable</span>
                </li>
              </ul>
            </div>


        <div className="flex items-center justify-center space-x-3" style={{marginTop:"140px"}}>
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div
            // initial={{ rotate: 45 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl rotate-45"
          />
          <Lightbulb className="w-6 h-6 text-white relative z-10" />
        </div>
        <span className="text-white font-semibold text-2xl">UBConcept</span>
      </div>
          </div>

          {/* Right Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Your Project. Our Experts. Let’s Begin.</h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-300">First name</Label>
                <Input 
                disabled={isSubmitting}
                  {...register("fname", { required: true})}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
                {errors.fname && <p className="text-amber-400 text-sm">Required</p>}
              </div>
              <div>
                <Label className="text-gray-300">Last name</Label>
                <Input 
                disabled={isSubmitting}
                  {...register("lname", { required: true })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
                {errors.lname && <p className="text-amber-400 text-sm">Required</p>}
              </div>
            </div>

            <div>
              <Label className="text-gray-300">Work email</Label>
              <Input 
                type="email" 
                disabled={isSubmitting}
                {...register("email", { required: true })}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
              {errors.email && <p className="text-amber-400 text-sm">Required</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-300">Company</Label>
                <Input 
                disabled={isSubmitting}
                  {...register("company")}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Label className="text-gray-300">Company Website</Label>
                <Input 
                disabled={isSubmitting}
                  {...register("companyWebsite")}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-300">Details</Label>
              <Textarea 
                rows={4} 
                {...register("details")}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
            </div>

            <Button
             disabled={isSubmitting}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-700 hover:to-amber-600 text-white py-2 transition-all duration-300"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending inquiry..." : " Send inquiry"}
            </Button>
            <p className="text-sm text-gray-400 text-center">
              We'll get back to you in 1–2 business days.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

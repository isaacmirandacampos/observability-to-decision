import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Tracer } from "@opentelemetry/sdk-trace-web";
import { SemanticAttributes } from "@opentelemetry/semantic-conventions";
import { metrics } from "@opentelemetry/api";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
const meter = metrics.getMeter("frontend");
const requestCounter = meter.createCounter("app.frontend.requests");
const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    requestCounter.add(1, {
      username: values.username,
      password: values.password,
    });

    console.log(values);
  }

  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <Card>
        <CardHeader>
          <CardTitle>Techoffee</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Isaac Newton" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <Link className="text-blue-600 underline" href="/register">
            Don't have an account? Register
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

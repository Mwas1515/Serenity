import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthCard, AuthCardHeader, AuthCardContent, AuthCardFooter, AuthCardTitle, AuthCardDescription} from "@/components/ui/auth-card";
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';

export const Register = () => {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
      toast.success('Signed in with Google successfully!');
      navigate('/');
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('Google sign-in failed. Please try again.');
        toast.error('Google sign-in failed.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      await register(formData.email, formData.password, formData.name);
      toast.success('Account created successfully! Welcome aboard.');
      navigate('/');
    } catch (err) {
      let message = 'Failed to create an account. Please try again.';
      if (err.code === 'auth/email-already-in-use') message = 'This email is already registered.';
      if (err.code === 'auth/weak-password') message = 'Password must be at least 6 characters long.';
      
      setError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<div className="flex min-h-[80vh] items-center justify-center p-4 sm:p-6 lg:p-8">
  <AuthCard className="w-full max-w-md bg-cream border border-sage-light rounded-xl2 shadow-xl">
    <AuthCardHeader className="space-y-2">
      <AuthCardTitle className="text-3xl font-display text-teal text-center">
        Create an account
      </AuthCardTitle>

      <AuthCardDescription className="text-center text-ink/70 font-body">
        Enter your details below to set up your profile
      </AuthCardDescription>
    </AuthCardHeader>

    <AuthCardContent className="grid gap-4">
      {error && (
        <div
          role="alert"
          className="rounded-xl2 border border-red-300 bg-red-50 p-3 text-sm font-medium text-red-700"
        >
          {error}
        </div>
      )}

      {/* Google Sign In Button */}
      <Button
        type="button"
        variant="outline"
        className="w-full gap-2 border-sage-light bg-white text-ink hover:bg-sage-light/20"
        onClick={handleGoogleSignIn}
        disabled={isSubmitting}
      >
        <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </Button>

      <div className="relative flex items-center justify-center my-1">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-sage-light" />
        </div>

        <span className="relative bg-cream px-3 text-xs uppercase tracking-wider text-ink/50">
          Or traditional email
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-teal font-medium">
            Full Name
          </Label>

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border-sage-light focus-visible:ring-gold"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-teal font-medium">
            Email address
          </Label>

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border-sage-light focus-visible:ring-gold"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password" className="text-teal font-medium">
            Password
          </Label>

          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              disabled={isSubmitting}
              className="pr-10 border-sage-light focus-visible:ring-gold"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-teal hover:text-teal-light"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirmPassword" className="text-teal font-medium">
            Confirm Password
          </Label>

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isSubmitting}
            className="border-sage-light focus-visible:ring-gold"
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-2 bg-teal text-cream hover:bg-teal-light font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
    </AuthCardContent>

    <AuthCardFooter>
      <p className="w-full text-center text-sm text-ink/70">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-gold hover:text-gold-light hover:underline"
        >
          Sign in
        </Link>
      </p>
    </AuthCardFooter>
  </AuthCard>
</div>
  );
};
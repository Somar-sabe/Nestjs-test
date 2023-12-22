import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // Mock user data (replace this with actual user data retrieval logic)
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'password123',
    },
    // Add more users as needed
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}


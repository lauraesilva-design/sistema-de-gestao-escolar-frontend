import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { request } from "http";

export async function proxy(request: NextRequest){
    const token = request.cookies.get("@gestao-escolar/token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    try{
        jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.next();
    } catch(e){
        console.error(e);
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config ={
    matcher: ["/perfil"],
};
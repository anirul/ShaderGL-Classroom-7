#version 330 core

in vec2 vert_texcoord;

layout (location = 0) out vec4 frag_color;

uniform sampler2D Ambient;
uniform sampler2D Normal;
uniform sampler2D MetalRoughAO;
uniform sampler2D Position;

uniform vec3 camera_position;
uniform vec3 light_position[32];
uniform vec3 light_color[32];
uniform int light_max;

const float PI = 3.14159265359;

void main()
{
	frag_color = vec4(0.0, 0.0, 0.0, 1.0);
}
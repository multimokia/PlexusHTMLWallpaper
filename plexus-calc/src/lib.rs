use wasm_bindgen::prelude::*;

#[wasm_bindgen]
struct Vector
{
    A_x: f32,
    A_y: f32,
    B_x: f32,
    B_y: f32
}

#[wasm_bindgen]
impl Vector
{
    pub fn new(ax: f32, ay: f32, bx: f32, by: f32) -> Vector
    {
        Vector { A_x: ax, A_y: ay, B_x: bx, B_y: by }
    }

    pub fn distance(&self) -> f32
    {
        ((self.A_x + self.B_x).powi(2) + (self.A_y + self.B_y).powi(2)).sqrt()
    }
}
